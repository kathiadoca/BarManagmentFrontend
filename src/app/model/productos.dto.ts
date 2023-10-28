export interface Data {
    id_Producto: string;
    Nombre: string;
    Costo: number;
    Precio_venta: number;
    Cantidad: number;
    Sede: string;
}

export interface ProductosDto {
    statusCode: number;
    message: string;
    data: Data;
}