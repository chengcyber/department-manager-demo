import { createSelector } from 'reselect'

export const departmentDataSelector = state => state.department.data

export const departmentListSelector = state =>
  state.department.list

export const getDepartmentPath = createSelector(
  departmentListSelector,
  list => list.path,
)

export const getDepartmentSearchText = createSelector(
  departmentListSelector,
  list => list.searchText,
)

export const getCurrentUser = createSelector(
  departmentDataSelector,
  getDepartmentPath,
  getDepartmentSearchText,
  (data, path, searchText) => {
    let current = data
    let user = {}
    path.forEach(
      (item, index) => {
        if (Array.isArray(current)) {
          current = current.find(
            i => i.name === item
          )
        }
        if (path.length - 1 === index) {
          user = current.user || {}
        } else {
          current = current.group
        }
      }
    )

    if (searchText) {
      return user.filter(
        u => u.name.toLowerCase().indexOf(searchText) >= 0
      )
    }
    return user
  },
)

