import * as React from 'react';

const SelectContext = React.createContext({ value: '', setValue: () => {} });

function Select({ value = '', onValueChange, children }) {
  const [internalValue, setInternalValue] = React.useState(value);

  React.useEffect(() => {
    setInternalValue(value ?? '');
  }, [value]);

  const setValue = (nextValue) => {
    setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  return <SelectContext.Provider value={{ value: internalValue, setValue }}>{children}</SelectContext.Provider>;
}

function SelectTrigger({ className = '', children }) {
  const { value, setValue } = React.useContext(SelectContext);
  const placeholderChild = React.Children.toArray(children).find((child) => child?.type?.displayName === 'SelectValue');

  return (
    <select
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className={`w-full rounded-lg border border-gray-300 px-3 py-2 bg-white ${className}`.trim()}
    >
      {placeholderChild && <option value="">{placeholderChild.props.placeholder}</option>}
      {React.Children.toArray(children).filter((child) => child?.type?.displayName !== 'SelectValue')}
    </select>
  );
}

function SelectValue() {
  return null;
}
SelectValue.displayName = 'SelectValue';

function SelectContent({ children }) {
  return <>{children}</>;
}

function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
export default Select;
