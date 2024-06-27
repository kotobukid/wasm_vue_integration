use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("hello {}", name)
}

#[wasm_bindgen]
pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[wasm_bindgen]
pub struct Point2D {
    pub x: f64,
    pub y: f64
}

#[wasm_bindgen]
impl Point2D {
    #[wasm_bindgen(constructor)]
    pub fn new(x: f64, y: f64) -> Point2D {
        Point2D {x, y}
    }
}

#[wasm_bindgen]
pub fn calculate_distance(point1: &Point2D, point2: &Point2D) -> f64 {
    let x_delta = point1.x - point2.x;
    let y_delta = point1.y - point2.y;
    (x_delta * x_delta + y_delta * y_delta).sqrt()
}

#[wasm_bindgen]
pub fn add_points(point1: &Point2D, point2: &Point2D) -> Point2D {
    Point2D::new(point1.x + point2.x, point1.y + point2.y)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
