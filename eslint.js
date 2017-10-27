/* @flow */
/* eslint-env commonjs */

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        browser: false,
        node: false,
        commonjs: false,
        'shared-node-browser': false,
        es6: true,
        worker: false,
        amd: false,
        mocha: false,
        jasmine: true,
        jest: true,
        phantomjs: false,
        protractor: false,
        qunit: false,
        jquery: false,
        prototypejs: false,
        shelljs: false,
        meteor: false,
        mongo: false,
        applescript: false,
        nashorn: false,
        serviceworker: false,
        atomtest: false,
        embertest: false,
        webextensions: false,
        greasemonkey: false,
        'jest/globals': true,
    },
    extends: ['prettier', 'prettier/flowtype'],
    plugins: ['flowtype', 'import', 'promise', 'eslint-comments', 'babel', 'moment-utc', 'jest', 'jsdoc', 'prettier'],
    settings: {
        'import/ignore': ['node_modules', '.png', '.jpg', '.json', '.html'],
        flowtype: {onlyFilesWithFlowAnnotation: false},
    },
    rules: {
        // Possible Errors
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-console': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'error',
        'valid-typeof': 'error',

        // Best Practices
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'off',
        complexity: ['error', 3],
        'consistent-return': 'error',
        'default-case': 'error',
        'dot-notation': ['error', {allowKeywords: true}],
        eqeqeq: 'error',
        'for-direction': 'error',
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'off',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        // Covered by babel/no-invalid-this
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': [
            'error',
            {
                allowLoop: true,
                allowSwitch: true,
            },
        ],
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': ['error', {props: true}],
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': 'off',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'off',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'off',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        radix: 'error',
        'require-await': 'error',
        'vars-on-top': 'off',
        yoda: 'error',

        // Strict Mode
        strict: 'error',

        // Variables
        'init-declarations': ['error', 'always'],
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'off',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': 'error',

        // Node.js
        'callback-return': ['error', ['callback', 'cb', 'next']],
        'global-require': 'off',
        'handle-callback-err': ['error', '^(err|error)$'],
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': 'error',
        'no-sync': 'error',

        // Stylistic Issues
        camelcase: ['error', {properties: 'always'}],
        'capitalized-comments': 'off',
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'comma-style': ['error', 'last'],
        'consistent-this': 'off',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': ['error', 'expression'],
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'line-comment-position': 'off',
        'linebreak-style': 'error',
        'lines-around-comment': 'error',
        'max-depth': ['error', 2],
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-params': ['error', 4],
        'max-statements': 'error',
        'max-statements-per-line': 'error',
        'new-cap': 'off',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': [
            'error',
            'DoWhileStatement',
            'WhileStatement',
            'ForStatement',
            'BreakStatement',
            'ContinueStatement',
        ],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: 'directive', next: '*'},
            {blankLine: 'never', prev: 'directive', next: 'directive'},
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
        ],
        'require-jsdoc': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'spaced-comment': ['error', 'always'],

        // ECMAScript 6
        'arrow-body-style': 'error',
        'constructor-super': 'error',
        'getter-return': 'error',
        'no-class-assign': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-restricted-imports': 'off',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'symbol-description': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                memberSyntaxSortOrder: ['single', 'multiple', 'none', 'all'],
            },
        ],

        // Import

        // Static analysis
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/no-restricted-paths': 'off',
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': 'off',
        'import/no-internal-modules': 'off',
        'import/no-webpack-loader-syntax': 'off',

        // Helpful warnings
        'import/export': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'error',

        // Module systems
        'import/unambiguous': 'off',
        'import/no-commonjs': 'off',
        'import/no-amd': 'error',
        'import/no-nodejs-modules': 'off',

        // Style guide
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-namespace': 'off',
        'import/extensions': ['error', {js: 'never'}],
        'import/order': 'off',
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'error',
        'import/max-dependencies': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'error',
        'import/no-anonymous-default-export': 'off',

        // Promise
        'promise/catch-or-return': 'error',
        'promise/always-return': 'off',
        'promise/param-names': 'error',
        'promise/no-native': 'off',
        'promise/no-return-wrap': 'off',
        'promise/no-nesting': 'error',
        'promise/no-promise-in-callback': 'error',
        'promise/no-callback-in-promise': 'error',
        'promise/avoid-new': 'off',
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',

        // Flow type
        'flowtype/boolean-style': ['error', 'boolean'],
        'flowtype/define-flow-type': 'error',
        'flowtype/no-dupe-keys': 'error',
        'flowtype/no-primitive-constructor-types': 'error',
        'flowtype/no-types-missing-file-annotation': 'error',
        'flowtype/no-weak-types': 'off',
        'flowtype/require-parameter-type': 'off',
        'flowtype/require-return-type': 'off',
        'flowtype/require-valid-file-annotation': ['error', 'always', {annotationStyle: 'block'}],
        'flowtype/require-variable-type': 'off',
        'flowtype/sort-keys': 'off',
        'flowtype/type-id-match': 'off',
        'flowtype/use-flow-type': 'error',

        // eslint comments
        'eslint-comments/disable-enable-pair': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
        'eslint-comments/no-use': 'off',

        // eslint babel
        'babel/no-invalid-this': 'error',

        // eslint moment utc
        'moment-utc/no-moment-without-utc': 'error',

        // eslint jest
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/valid-expect': 'error',

        // eslint jsdoc
        'jsdoc/check-param-names': 'off',
        'jsdoc/check-tag-names': 'error',
        'jsdoc/check-types': 'error',
        'jsdoc/newline-after-description': 'off',
        'jsdoc/require-description-complete-sentence': 'error',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'error',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-example': 'error',
        'jsdoc/require-returns-description': 'error',
        'jsdoc/require-returns-type': 'error',

        // eslint prettier
        'prettier/prettier': [
            'error',
            {
                useTabs: false,
                printWidth: 120,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: false,
                jsxBracketSameLine: false,
                semi: false,
            },
        ],
    },
}
