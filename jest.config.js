export default {
    roots: ['<rootDir>/tests/'],
    verbose: true,
    clearMocks: true,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts', '**/__tests__/**/?(*.)+(spec|test).ts'],
    testRunner: 'jest-circus/runner',
    testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.ts',
        '!**/*.d.ts',
        '!**/dist/**',
        '!**/node_modules/**',
        '!**/vendor/**',
        '!**/generated/**',
        '!**/__fixtures__/**',
        '!**/scenarios/**',
        '!**/redirects/**',
    ],
    coverageThreshold: {
        'global': {
            branches: 4,
            functions: 4,
            lines: 4,
            statements: 4,
        },
        './src/**/*.ts': {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    coverageDirectory: './coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
}
