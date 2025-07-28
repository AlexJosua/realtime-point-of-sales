export const HEADER_TABLE_TABLE = [
  "NO",
  "Name",
  "Capacity",
  "Status",
  "action",
];

export const STATUS_TABLE_LIST = [
  {
    value: "available",
    label: "Available",
  },
  {
    value: "unavailable",
    label: "Unvailable",
  },
  {
    value: "reserved",
    label: "Reserved",
  },
];

export const INITIAL_TABLE = {
  name: "",
  description: "",
  capacity: "",
  status: "",
};

export const INITIAL_STATE_TABLE = {
  status: "idle",
  errors: {
    id: [],
    name: [],
    description: [],
    capacity: [],
    status: [],
    _form: [],
  },
};
