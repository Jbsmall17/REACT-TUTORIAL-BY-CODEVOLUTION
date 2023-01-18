import React,{useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

export default function UseCallback() {
    const [age,setAge] = React.useState(25)
    const [salary,setSalary] = React.useState(50000)

    const incrementAge = useCallback(()=>{
        setAge(prev =>prev + 1)
    },[age])

    const incrementSalary = useCallback(()=>{
        setSalary(prev =>prev + 1)
    },[salary])

  return (
    <div>
        <Title />
        <Count text="Age" count={age}/>
        <Button handler={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handler={incrementSalary}>Increment Salary</Button>
    </div>
  )
}
