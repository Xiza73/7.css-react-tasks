export interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
  placeholder: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  onKeyDown,
  onClick,
  placeholder,
}) => {
  return (
    <div className="searchbox mx-auto mb-3">
      <input
        type="search"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      <button
        aria-label="search"
        onClick={onClick}
      ></button>
    </div>
  );
};
