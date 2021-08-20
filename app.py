# Imports
import os

from flask import Flask, request, jsonify
from flask_cors import CORS

from server.utils.flask.request import request_body
from server.utils.pathfinding.optimal_path import coordinates, optimal_path
from server.data import MATRIX


# Constants
STATIC_FOLDER = "build"
STATIC_URL_PATH = ""
ORIGINS = [
    "http://localhost:3000",
    "https://deimos-y.web.app",
    "http://deimos-y.web.app",
]
PORT = os.environ.get("PORT", 5000)
HOST = "0.0.0.0"
DEBUG = PORT == 5000


# Initializations
# TODO: Set static_folder and static_url_path as environment variables
app = Flask(
    __name__,
    static_folder=STATIC_FOLDER,
    static_url_path=STATIC_URL_PATH,
)
# TODO: Set origins list items as environment variables
CORS(
    app,
    resources={
        r"/api/*": {
            "origins": ORIGINS,
        },
    },
)


# Routes
@app.route(
    "/",
    methods=["GET"],
)
def index():
    return app.send_static_file("index.html")


@app.route(
    "/favicon.ico",
    methods=["GET"],
)
def favicon():
    return app.send_static_file("favicon.ico")


@app.route(
    "/api/paths",
    methods=["POST"],
)
def paths():
    try:
        body = request_body(request)
        # TODO: Refactor coordinates invocation into optimal_path
        start, end = coordinates(body)
        path = optimal_path(
            start,
            end,
            MATRIX,
        )

    except Exception as error:
        # TODO: Create proper error handling and logging
        print(error)
        path = start, end

    finally:
        return jsonify(path), 201


if __name__ == "__main__":
    # TODO: Set host, port, and debug as environment variables
    app.run(
        host=HOST,
        port=PORT,
        debug=DEBUG,
    )
