import { useState } from "react";

import CompanyDetails from "./details";

export default function Company({ _id, name, employees = [] }) {
  const [company, setCompany] = useState({ _id, name, employees });

  return <CompanyDetails {...company} onChange={setCompany} />;
}
