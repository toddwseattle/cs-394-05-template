import { execSync } from 'child_process';

try {
  // Run the tests with coverage and no color output
  const output = execSync(
    'npx vitest run --coverage --no-color --poolOptions.threads.singleThread=true',
    { encoding: 'utf8' },
  );

  // Initialize check results
  let testCount = 0;
  let allTestsPassing = false;
  let coveragePercent = 0;

  // Parse test count and test file count
  const testMatch = output.match(/Tests\s+(\d+)\s+passed\s+\((\d+)\)/i);
  const fileMatch = output.match(/Test Files\s+(\d+)\s+passed\s+\((\d+)\)/i);

  if (testMatch) {
    testCount = parseInt(testMatch[1]);
  }

  // Check if all tests passed by verifying both test files and test counts
  allTestsPassing =
    fileMatch?.length >= 3 && // match exists and has capture groups
    fileMatch[1] === fileMatch[2] && // file counts match
    testMatch?.length >= 3 && // match exists and has capture groups
    testMatch[1] === testMatch[2] && // test counts match
    parseInt(fileMatch[1]) > 0 && // at least one file passed
    testCount > 0; // at least one test passed

  // Parse coverage for Timer.tsx
  const coverageLines = output.split('\n');
  const timerLine = coverageLines.find((line) => line.includes('Timer.tsx'));
  if (timerLine) {
    const coverage = timerLine.match(/\d+/);
    coveragePercent = coverage ? parseInt(coverage[0]) : 0;
  }

  // Evaluate requirements
  const meetsTestCount = testCount >= 5;
  const meetsCoverage = coveragePercent >= 80;

  console.log('\nGrading Results:');
  console.log('---------------');
  console.log(
    `Number of tests: ${testCount} (Required: ≥5) - ${meetsTestCount ? '✅' : '❌'}`,
  );
  console.log(`All tests passing: ${allTestsPassing ? '✅' : '❌'}`);
  console.log(
    `Timer.tsx coverage: ${coveragePercent}% (Required: ≥80%) - ${meetsCoverage ? '✅' : '❌'}`,
  );

  // Exit with appropriate code
  if (meetsTestCount && allTestsPassing && meetsCoverage) {
    console.log('\n✅ All requirements met!');
    process.exit(0);
  } else {
    console.log('\n❌ Some requirements not met');
    process.exit(1);
  }
} catch (error) {
  console.error('Error running tests:', error.message);
  process.exit(1);
}
