import { loadFeatures, autoBindSteps } from 'jest-cucumber'
import * as steps from './core.steps.js'

const features = loadFeatures('./src/components/UsersList/tests/core.feature')

const stepsRef = ({ given, then, and }) => {
  given('the component UsersList is rendered with the following list of users:',
    (docString) => {
      steps.renderComponent(docString)
    })

  then(/^the UserList component should show a user with the email:"(.*)"$/, (arg0) => {
    expect(steps.isTheUserInComponent(arg0)).toBe(true)
  })

  and(/^a user with the email:"(.*)"$/, (arg0) => {
    expect(steps.isTheUserInComponent(arg0)).toBe(true)
  })
}

autoBindSteps(features, [stepsRef])
