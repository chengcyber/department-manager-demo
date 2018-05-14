import { combineReducers } from 'redux'
import {
  SET_DEPARTMENT_PATH,
  SET_DEPARTMENT_SEARCH_TEXT,
} from '../action/department'

export const INIT_DATA = {
  name: "总部门",
  user: [{
    name: "Prometheus",
    sex: "male"
  }, {
    name: "Athena",
    sex: "female"
  }],
  group: [{
    name: "子部门A",
    user: [{
      name: "Dijkstra",
      sex: "male"
    }, {
      name: "Linus",
      sex: "male"
    }],
    group: [{
      name: "子部门A1",
      user: [
        {
          name: "someone",
          sex: "female",
        },
      ],
    }],
  }, {
    name: "子部门B",
    user: [],
    group: []
  }]
}

export const data = (state = INIT_DATA, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export const INIT_LIST = {
  path: ['总部门'],
  searchText: '',
}

export const list = (state = INIT_LIST, action) => {
  switch(action.type) {
    case SET_DEPARTMENT_PATH:
      return {
        ...state,
        path: action.payload,
      }
    case SET_DEPARTMENT_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      }
    default:
      return state
  }
}

export default combineReducers({
  data,
  list,
})
