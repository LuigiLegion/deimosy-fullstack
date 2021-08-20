# Imports
from typing import List, Tuple

from pathfinding.core.grid import Grid
from pathfinding.finder.a_star import AStarFinder
from pathfinding.core.diagonal_movement import DiagonalMovement


# Initializations
def coordinates(body: dict) -> Tuple[Tuple[int]]:
    """
    Creates tuple of start and end coordinate tuples from request body.
    """

    start = (body.get("start").get("x"), body.get("start").get("y"))
    end = (body.get("end").get("x"), body.get("end").get("y"))

    return start, end


def optimal_path(
    start: Tuple[int],
    end: Tuple[int],
    matrix: List[List[int]],
) -> List[Tuple[int]]:
    """
    Finds optimal path between two coordinates using the A* algorithm.
    """

    grid = Grid(matrix=matrix)
    start = grid.node(start[0], start[1])
    end = grid.node(end[0], end[1])
    finder = AStarFinder(diagonal_movement=DiagonalMovement.always)

    path, _ = finder.find_path(
        start,
        end,
        grid,
    )

    return path
