
function playWithState() {
  const [age, setAge] = useState('10')

  const handleClick = () => {
    setAge(age + 1)

    return (
      <div>
        Today i am {age} years old
        <button onClick={handleClick}>Get Older!</button>
      </div>
    )
  }
}
