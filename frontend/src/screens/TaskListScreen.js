import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function TaskListScreen() {

    const params = useParams()


    useEffect(() => {

    })

  return (
    <div>
      <h3>Tasks for: {params.id}</h3>
    </div>
  )
}

export default TaskListScreen
