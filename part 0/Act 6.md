sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    browser->>server: { "content": "content", "date": "2025-02-01T12:00:00Z" } 
    activate server
    server-->>browser: HTML 201 Created { "content": "content", "date": "2025-02-01T12:00:00Z" }
    deactivate server

    Note right of browser: No more HTTP request
