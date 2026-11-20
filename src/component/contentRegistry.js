const STORAGE_KEY = 'edu.contentRegistry';
const HIDDEN_EXAMPLES_KEY = 'edu.contentRegistry.hiddenExamples';
const STATUS_OVERRIDES_KEY = 'edu.contentRegistry.statusOverrides';
const REPORTS_STORAGE_KEY = 'edu.contentRegistry.reports';
const CONTENT_STATUSES = ['pending', 'approved', 'rejected'];
const CONTENT_REVIEW_FIELDS = [
  'title',
  'type',
  'category',
  'subcategory',
  'subcategory2',
  'link',
];
export const CONTENT_REJECTION_REASONS = [
  'Informação incorreta',
  'Fonte não confiável',
  'Linguagem ofensiva',
];

function isValidRejectionReasons(reasons) {
  return (
    Array.isArray(reasons) &&
    reasons.length > 0 &&
    reasons.every((reason) => CONTENT_REJECTION_REASONS.includes(reason)) &&
    new Set(reasons).size === reasons.length
  );
}

function isValidReportReasons(reasons, subjectName) {
  const allowedReasons = [
    ...CONTENT_REJECTION_REASONS,
    `Irrelevante para ${subjectName}`,
  ];
  return (
    Array.isArray(reasons) &&
    reasons.length > 0 &&
    reasons.every((reason) => allowedReasons.includes(reason)) &&
    new Set(reasons).size === reasons.length
  );
}

function isValidIncorrectFields(fields) {
  return (
    Array.isArray(fields) &&
    fields.every((field) =>
      CONTENT_REVIEW_FIELDS.includes(field) || /^tag:\d+$/.test(field)
    ) &&
    new Set(fields).size === fields.length
  );
}

function announceContentRegistryUpdate() {
  window.dispatchEvent(new Event('edu:content-registry-updated'));
}

export function getSafeHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:'
      ? url.href
      : null;
  } catch {
    return null;
  }
}

function isContentEntry(entry) {
  return (
    entry &&
    typeof entry.id === 'string' &&
    typeof entry.title === 'string' &&
    typeof entry.type === 'string' &&
    typeof entry.category === 'string' &&
    typeof entry.subcategory === 'string' &&
    (entry.subcategory2 === undefined || typeof entry.subcategory2 === 'string') &&
    (entry.specialty === undefined || typeof entry.specialty === 'string') &&
    (entry.status === undefined || CONTENT_STATUSES.includes(entry.status)) &&
    (entry.rejectionReasons === undefined || isValidRejectionReasons(entry.rejectionReasons)) &&
    typeof entry.link === 'string' &&
    Array.isArray(entry.tags) &&
    typeof entry.createdAt === 'string'
  );
}

function getStoredContentEntries() {
  const savedEntries = window.localStorage.getItem(STORAGE_KEY);
  if (savedEntries === null) {
    return [];
  }

  const entries = JSON.parse(savedEntries);
  if (!Array.isArray(entries) || !entries.every(isContentEntry)) {
    throw new Error('Os conteúdos salvos estão em um formato inválido.');
  }

  return entries;
}

function getHiddenExampleIds() {
  const savedIds = window.localStorage.getItem(HIDDEN_EXAMPLES_KEY);
  if (savedIds === null) {
    return [];
  }

  const ids = JSON.parse(savedIds);
  if (!Array.isArray(ids) || !ids.every((id) => typeof id === 'string')) {
    throw new Error('A lista de exemplos ocultos está em um formato inválido.');
  }

  return ids;
}

function getStatusOverrides() {
  const savedOverrides = window.localStorage.getItem(STATUS_OVERRIDES_KEY);
  if (savedOverrides === null) {
    return {};
  }

  const overrides = JSON.parse(savedOverrides);
  if (
    !overrides ||
    Array.isArray(overrides) ||
    typeof overrides !== 'object' ||
    !Object.values(overrides).every((override) =>
      CONTENT_STATUSES.includes(override) ||
      (
        override &&
        typeof override === 'object' &&
        !Array.isArray(override) &&
        override.status === 'rejected' &&
        isValidRejectionReasons(override.rejectionReasons)
      )
    )
  ) {
    throw new Error('Os status dos conteúdos estão em um formato inválido.');
  }

  return overrides;
}

export function getContentEntries(examples = []) {
  const hiddenExampleIds = new Set(getHiddenExampleIds());
  const statusOverrides = getStatusOverrides();
  const storedEntries = getStoredContentEntries().map((entry) => ({
    ...entry,
    status: entry.status || 'approved',
  }));
  const visibleExamples = examples
    .filter((entry) => !hiddenExampleIds.has(entry.id))
    .map((entry) => {
      const override = statusOverrides[entry.id];
      const status = typeof override === 'string' ? override : override?.status;
      const rejectionReasons = typeof override === 'object'
        ? override.rejectionReasons
        : undefined;

      return {
        ...entry,
        ...(rejectionReasons ? { rejectionReasons } : {}),
        status: status || entry.status || 'pending',
      };
    });

  return [...storedEntries, ...visibleExamples];
}

export function getContentReports() {
  const savedReports = window.localStorage.getItem(REPORTS_STORAGE_KEY);
  if (savedReports === null) {
    return [];
  }

  const reports = JSON.parse(savedReports);
  const isValidReport = (report) =>
    report &&
    typeof report.id === 'string' &&
    typeof report.contentId === 'string' &&
    typeof report.subjectName === 'string' &&
    report.subjectName.trim().length > 0 &&
    typeof report.createdAt === 'string' &&
    isValidReportReasons(report.reasons, report.subjectName) &&
    (
      report.incorrectFields === undefined ||
      isValidIncorrectFields(report.incorrectFields)
    );

  if (!Array.isArray(reports) || !reports.every(isValidReport)) {
    throw new Error('As denúncias salvas estão em um formato inválido.');
  }

  return reports;
}

export function reportContentEntry(
  contentId,
  reasons,
  subjectName,
  incorrectFields = []
) {
  const normalizedSubjectName =
    typeof subjectName === 'string' ? subjectName.trim() : '';
  if (
    typeof contentId !== 'string' ||
    contentId.length === 0 ||
    normalizedSubjectName.length === 0 ||
    !isValidReportReasons(reasons, normalizedSubjectName)
  ) {
    throw new Error('Selecione pelo menos um motivo válido para denunciar o conteúdo.');
  }
  if (!isValidIncorrectFields(incorrectFields)) {
    throw new Error('Os campos incorretos selecionados são inválidos.');
  }

  const reports = getContentReports();
  const report = {
    id: `report-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    contentId,
    reasons,
    incorrectFields,
    subjectName: normalizedSubjectName,
    createdAt: new Date().toISOString(),
  };

  window.localStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify([...reports, report]));
  announceContentRegistryUpdate();
  return report;
}

export function saveContentEntry(entry) {
  const entries = getStoredContentEntries();
  const newEntry = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    status: 'pending',
  };
  const updatedEntries = [newEntry, ...entries];

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
  announceContentRegistryUpdate();
  return updatedEntries;
}

function setContentStatus(id, status, rejectionReasons) {
  const entries = getStoredContentEntries();
  const entryIndex = entries.findIndex((entry) => entry.id === id);

  if (entryIndex >= 0) {
    const updatedEntries = entries.map((entry) => {
      if (entry.id !== id) {
        return entry;
      }

      const updatedEntry = { ...entry, status };
      if (status === 'rejected') {
        updatedEntry.rejectionReasons = rejectionReasons;
      } else {
        delete updatedEntry.rejectionReasons;
      }
      return updatedEntry;
    });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
    announceContentRegistryUpdate();
    return;
  }

  const statusOverrides = getStatusOverrides();
  statusOverrides[id] = status === 'rejected'
    ? { status, rejectionReasons }
    : status;
  window.localStorage.setItem(STATUS_OVERRIDES_KEY, JSON.stringify(statusOverrides));
  announceContentRegistryUpdate();
}

export function approveContentEntry(id) {
  setContentStatus(id, 'approved');
}

export function rejectContentEntry(id, rejectionReasons) {
  if (!isValidRejectionReasons(rejectionReasons)) {
    throw new Error('Selecione pelo menos um motivo válido para rejeitar o conteúdo.');
  }

  setContentStatus(id, 'rejected', rejectionReasons);
}

export function deleteContentEntry(id) {
  const entries = getStoredContentEntries();
  const updatedEntries = entries.filter((entry) => entry.id !== id);

  if (updatedEntries.length !== entries.length) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
    announceContentRegistryUpdate();
    return;
  }

  const hiddenExampleIds = getHiddenExampleIds();
  if (!hiddenExampleIds.includes(id)) {
    window.localStorage.setItem(
      HIDDEN_EXAMPLES_KEY,
      JSON.stringify([...hiddenExampleIds, id])
    );
    announceContentRegistryUpdate();
  }
}
