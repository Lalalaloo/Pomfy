
export default function click() {
  const handleClick = () => console.log("yo, stop clicking me!")
  
  return (
    <button onClick={handleClick}>Click me</button>
  )
}