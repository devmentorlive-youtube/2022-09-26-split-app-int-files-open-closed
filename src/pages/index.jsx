import { useState } from "react";

function TextField({ value, onChange = () => {} }) {
  return (
    <input
      className="text-gray-900 p-2"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function Employee({ name, tags = [], onChange = () => {} }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <TextField
          value={name}
          onChange={(name) =>
            onChange({
              name,
              tags,
            })
          }
        />
      </div>
      <div>
        {tags.map(({ label }, i) => (
          <div key={i}>{label}</div>
        ))}
      </div>
    </div>
  );
}

function Company({ _id, name, employees = [], onChange = () => {} }) {
  return (
    <div className="flex flex-col gap-2">
      <div>ID: {_id}</div>
      <div>
        Name:{" "}
        <TextField
          value={name}
          onChange={(name) =>
            onChange({
              _id,
              name,
              employees,
            })
          }
        />
      </div>
      <div>
        {employees.map((employee, i) => (
          <Employee
            key={i}
            {...employee}
            onChange={(employee) =>
              onChange({
                _id,
                name,
                employees: employees.map((_employee, j) =>
                  i === j ? employee : _employee
                ),
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function Homepage({ company }) {
  const [_company, setCompany] = useState(company);

  return (
    <div className="mt-16 container mx-auto">
      <Company {..._company} onChange={(company) => setCompany(company)} />
    </div>
  );
}

export function getServerSideProps(ctx) {
  return {
    props: {
      company: {
        _id: "1",
        name: "company 1",
        employees: [
          {
            name: "employee 1",
            tags: [
              {
                label: "label 1",
              },
              {
                label: "label 2",
              },
            ],
          },
          {
            name: "employee 2",
            tags: [
              {
                label: "excellent",
              },
              {
                label: "punctual",
              },
            ],
          },
        ],
      },
    },
  };
}
