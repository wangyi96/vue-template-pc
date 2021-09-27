const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  imgUrl: state => state.user.imgUrl,
  employeeRoleMappings: state => state.user.employeeRoleMappings,
  department: state => state.user.department,
  group: state => state.user.group,
  userId: state => state.user.userId,
  userName: state => state.user.userName,
  role: state => state.user.role,
}
export default getters
