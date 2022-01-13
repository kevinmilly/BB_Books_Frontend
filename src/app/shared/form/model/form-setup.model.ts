import { Observable } from "rxjs";

export interface FormSetupModel {
    displayName: string;
    controlName: string;
    type: string;
    required: boolean;
    default: any;
    numberMax?: number;
    numberMin?: number;
    stringChoices?: any[]
    autoCompleteOptions?: Observable<any[]>;
};