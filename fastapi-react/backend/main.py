import uvicorn

if __name__ == "__main__":
    print("It is being excuted")
    uvicorn.run("app.test:app", host = "127.0.0.1", port = 9000, reload = True)
                