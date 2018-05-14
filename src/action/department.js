export const SET_DEPARTMENT_PATH = 'app/department/set_department_path'

export const SET_DEPARTMENT_SEARCH_TEXT = 'app/department/set_department_search_text'

export const setDepartmentPath = (path) => ({
  type: SET_DEPARTMENT_PATH,
  payload: path,
})

export const setDepartmentSearchText = (text) => ({
  type: SET_DEPARTMENT_SEARCH_TEXT,
  payload: text,
  meta: {
    debounce: {
      time: 200,
      leading: false,
      trailing: true,
    },
  },
})

