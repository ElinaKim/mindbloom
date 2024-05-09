interface TaskCheckboxProps {
  isChecked: boolean;
  onCheckboxChange: () => void;
}

export function TaskCheckbox({ isChecked, onCheckboxChange }: TaskCheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onCheckboxChange}
        className='accent-green'
      />
    </>
  )
}