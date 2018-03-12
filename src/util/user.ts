import Vue from 'vue'

export interface User {
  id: string
  username: string
  createdAt: string
  signedUpAt: string
  session: {
    id: string
  }
}

// export default User
