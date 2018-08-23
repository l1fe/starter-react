// Misc methods

export const typeCreator = (str) => ({
  request: `${str}/request`,
  success: `${str}/success`,
  failure: `${str}/failure`,
});

export const normalizeById = (items) => items.reduce((total, item) => ({
  byId: {
    ...total.byId,
    [item.id]: item,
  },
  allIds: [
    ...total.allIds,
    item.id,
  ],
}), {
  byId: {},
  allIds: [],
});
