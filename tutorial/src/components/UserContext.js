import React from "react"

const context = React.createContext()
const UserProvider = context.Provider
const UserConsumer = context.Consumer

export { UserProvider, UserConsumer}