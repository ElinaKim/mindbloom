const onClick = () => {
  console.log('Click checkbox')
}

export function TaskCheckbox({ }) {
  return (
    <>
      <input
        type="checkbox"
        onClick={onClick}
      />
    </>
  )
}