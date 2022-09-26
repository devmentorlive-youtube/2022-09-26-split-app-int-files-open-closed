import Company from "@/features/company";

export default function Homepage({ company }) {
  return (
    <div className="mt-16 container mx-auto">
      <Company {...company} />
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
