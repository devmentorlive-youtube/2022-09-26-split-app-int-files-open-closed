export default function TextField({ value, onChange = () => {} }) {
  return (
    <input
      className="text-gray-900 p-2"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
