import TextField from "@/ui/text-field";

export default function Employee({ name, tags = [], onChange = () => {} }) {
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
      <div className="flex flex-col gap-2">
        <h2>Tags</h2>
        {tags.map(({ label }, i) => (
          <div key={i}>
            <TextField
              value={label}
              onChange={(label) =>
                onChange({
                  name,
                  tags: tags.map((tag, j) => (i === j ? { label } : tag)),
                })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
