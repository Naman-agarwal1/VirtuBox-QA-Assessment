# Test Strategy

## Scope

The application is a task management system with registration/login and task CRUD operations.

## Priority

### High
- Registration and login
- Authentication/session behaviour
- User data isolation
- Create/update/delete persistence

### Medium
- Input validation
- Empty task list
- Multiple tasks
- Refresh after operations

### Low
- Minor UI formatting
- Cosmetic messages

## Test types

1. Functional testing
2. Positive testing
3. Negative testing
4. Boundary/edge testing
5. Regression testing
6. Basic security/authorization checks
7. Data persistence checks

## Exit considerations

Before production release, critical authentication and data-integrity issues should be closed. Major user journeys should pass and no unresolved Critical/High severity defect should remain without an accepted risk.
