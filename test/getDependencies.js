import test from 'ava'
import getDependencies from '../src/getDependencies'

const pkgPath = 'test/stubs/package.json'
const projectPath = 'test/stubs'

test('returns with all valid dependencies', t => {
  const expected = {
    dep1: '1.0.0',
    dep2: '2.0.0',
    dep3: '3.0.0',
    dep4: '4.0.0'
  }

  t.deepEqual(
    getDependencies(pkgPath),
    expected
  )

  t.deepEqual(
    getDependencies(projectPath),
    expected
  )
})
