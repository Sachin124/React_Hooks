import React from 'react'
import { connect } from 'react-redux'

export const demo = (props) => {
  return (
    <div>demo</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(demo)