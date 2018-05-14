import {
  INIT_DATA,
  data as dataReducer,
  INIT_LIST,
  list as listReducer,
} from '../department'
import {
  SET_DEPARTMENT_PATH,
  SET_DEPARTMENT_SEARCH_TEXT,
} from '../../action/department'

describe('Reducer - department', () => {

  describe('data reducer', () => {

    it('should return initial state', () => {
      const expected = INIT_DATA

      const actual = dataReducer(
        void 0,
        {},
      )

      expect(actual).toEqual(expected)
    })

  })

  describe('list reducer', () => {

    it('should return initial state', () => {
      const expected = INIT_LIST

      const actual = listReducer(
        void 0,
        {},
      )

      expect(actual).toEqual(expected)
    })

    it('should set path success', () => {
      const expected = {
        path: ['qwer', 'asdf'],
        searchText: '',
      }

      const actual = listReducer(
        INIT_LIST,
        {
          type: SET_DEPARTMENT_PATH,
          payload: ['qwer', 'asdf'],
        }
      )

      expect(actual).toEqual(expected)
    })

    it('should set search text success', () => {
      const expected = Object.assign(
        {},
        INIT_LIST,
        {
          searchText: 'searching fooooo',
        }
      )

      const actual = listReducer(
        INIT_LIST,
        {
          type: SET_DEPARTMENT_SEARCH_TEXT,
          payload: 'searching fooooo',
        }
      )

      expect(actual).toEqual(expected)
    })

  })
})
