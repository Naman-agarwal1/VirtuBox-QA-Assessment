# Test Cases

| ID | Area | Test Case | Steps / Data | Expected Result | Type | Priority |
|---|---|---|---|---|---|---|
| REG-01 | Registration | Register with valid details | Enter valid name, email and password | Account is created | Positive | High |
| REG-02 | Registration | Empty mandatory fields | Submit empty form | Validation messages shown | Negative | High |
| REG-03 | Registration | Invalid email | Enter `abc@` | Registration is blocked | Negative | High |
| REG-04 | Registration | Duplicate email | Register with existing email | Duplicate registration is rejected | Negative | High |
| REG-05 | Registration | Short password | Enter password below defined minimum | Validation shown | Boundary | Medium |
| REG-06 | Registration | Long input | Enter unusually long name/email | App handles input without crash | Edge | Medium |
| REG-07 | Registration | Spaces only | Enter spaces in required fields | Registration is blocked | Negative | Medium |
| LOG-01 | Login | Valid credentials | Use registered email/password | User reaches task page | Positive | High |
| LOG-02 | Login | Wrong password | Valid email + wrong password | Login is rejected | Negative | High |
| LOG-03 | Login | Unknown email | Unregistered email | Login is rejected | Negative | High |
| LOG-04 | Login | Empty fields | Submit empty login form | Validation shown | Negative | High |
| LOG-05 | Login | Invalid email format | Enter `test@` | Login is blocked | Negative | Medium |
| LOG-06 | Login | Logout | Login and click Logout | Session is ended and login screen shown | Positive | High |
| TASK-C01 | Create | Valid task | Enter valid title and save | Task appears in list | Positive | High |
| TASK-C02 | Create | Blank title | Save with empty title | Task is not created | Negative | High |
| TASK-C03 | Create | Spaces-only title | Enter spaces | Task is rejected | Negative | Medium |
| TASK-C04 | Create | Long title | Enter a very long title | App validates/handles it safely | Edge | Medium |
| TASK-R01 | Read | View task list | Login after creating tasks | User's tasks are displayed | Positive | High |
| TASK-R02 | Read | Empty task list | Login with new user | Clear empty-state is shown | Edge | Medium |
| TASK-R03 | Read | Refresh | Create task and refresh | Saved task remains | Positive | High |
| TASK-U01 | Update | Edit task | Edit title and save | Updated title is displayed | Positive | High |
| TASK-U02 | Update | Blank updated title | Change title to blank | Update is rejected | Negative | High |
| TASK-U03 | Update | Cancel edit | Change title then cancel | Original value remains | Positive | Medium |
| TASK-D01 | Delete | Delete task | Delete an existing task | Only selected task is removed | Positive | High |
| TASK-D02 | Delete | Cancel delete | Start delete then cancel | Task remains | Positive | Medium |
| TASK-D03 | Delete | Refresh after delete | Delete task and refresh | Deleted task does not return | Positive | High |
| SEC-01 | Authorization | User data isolation | Login as another user | Other user's tasks are not visible | Negative/Security | Critical |
| ERR-01 | Error handling | Repeated save click | Click Save quickly multiple times | Duplicate task should not be created | Edge | Major |
| ERR-02 | Error handling | Unexpected input | Use special characters/script-like text | App handles input safely | Negative | Major |

## Test data examples

Valid:
- Name: `Rahul Sharma`
- Email: `rahul.qa@example.com`
- Password: `Test@12345`
- Task: `Prepare QA report`

Invalid:
- Email: `rahul@`
- Password: empty
- Task: empty or spaces only
