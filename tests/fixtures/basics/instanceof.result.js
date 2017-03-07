module.exports = {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 32
        }
    },
    "range": [
        0,
        32
    ],
    "body": [
        {
            "type": "VariableDeclaration",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 32
                }
            },
            "range": [
                0,
                32
            ],
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 31
                        }
                    },
                    "range": [
                        4,
                        31
                    ],
                    "id": {
                        "type": "Identifier",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 5
                            }
                        },
                        "range": [
                            4,
                            5
                        ],
                        "name": "a"
                    },
                    "init": {
                        "type": "ArrowFunctionExpression",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 31
                            }
                        },
                        "range": [
                            8,
                            31
                        ],
                        "id": null,
                        "async": false,
                        "generator": false,
                        "expression": true,
                        "params": [],
                        "body": {
                            "type": "BinaryExpression",
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 15
                                },
                                "end": {
                                    "line": 1,
                                    "column": 30
                                }
                            },
                            "range": [
                                15,
                                30
                            ],
                            "left": {
                                "type": "ObjectExpression",
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 15
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 17
                                    }
                                },
                                "range": [
                                    15,
                                    17
                                ],
                                "properties": []
                            },
                            "operator": "instanceof",
                            "right": {
                                "type": "Identifier",
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 29
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 30
                                    }
                                },
                                "range": [
                                    29,
                                    30
                                ],
                                "name": "a"
                            }
                        }
                    }
                }
            ],
            "kind": "let"
        }
    ],
    "sourceType": "script"
};
