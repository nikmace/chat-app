export default function checkIfUserExists() {
  return localStorage.getItem('chat.user-info');
}
