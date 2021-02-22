export class CreateInventoryDto {
    readonly productName: string;
    readonly target: string;
    readonly type: string;
    readonly sizesAvailable: string;
    readonly coloursAvailable?: string;
    readonly photoUrl: string;
    readonly pricePerUnit: number;
    readonly quantityAvailable: number;
}
