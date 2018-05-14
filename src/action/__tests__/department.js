import {
  SET_DEPARTMENT_PATH,
  SET_DEPARTMENT_SEARCH_TEXT,
  setDepartmentPath,
  setDepartmentSearchText,
} from '../department'

describe('Action - department', () => {

  it('setDepartmentPath', () => {
    const expected = ({
      type: SET_DEPARTMENT_PATH,
      payload: ['qwer', 'asdf'],
    })
    const actual = setDepartmentPath(['qwer', 'asdf'])
    expect(actual).toEqual(expected)
  })

  it('setDepartmentSearchText', () => {
    const expected = ({
      type: SET_DEPARTMENT_SEARCH_TEXT,
      payload: 'searching foo',
      meta: {
        debounce: {
          time: 200,
          leading: false,
          trailing: true,
        },
      },
    })
    const actual = setDepartmentSearchText('searching foo')
    expect(actual).toEqual(expected)
  })

})
