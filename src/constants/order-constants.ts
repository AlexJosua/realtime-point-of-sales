export const HEADER_TABLE_ORDER = [
  "NO",
  "Order ID",
  "Customer Name",
  "Table",
  "Status",
  "action",
];

export const INITIAL_ORDER = {
  customer_name: "",
  table_id: "",
  status: "",
};

export const INITIAL_STATE_ORDER = {
  status: "idle",
  errors: {
    customer_name: [],
    table_id: [],
    status: [],
    _form: [],
  },
};

export const STATUS_CREATE_ORDER = [
  {
    value: "reserved",
    label: "Reserved",
  },
  {
    value: "process",
    label: "Process",
  },
];

export const HEADER_TABLE_DETAIL_ORDER = [
  "NO",
  "Menu",
  "Total",
  "Status",
  "action",
];
