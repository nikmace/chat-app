export interface User {
  username: string;
  sex: string;
}

export function getUser() {
  const data = localStorage.getItem('chat.user-info');

  if (!data) {
    return null;
  }

  return JSON.parse(data) as User;
}

export function setUser(user: User): User {
  localStorage.setItem('chat.user-info', JSON.stringify(user));
  return user;
}
