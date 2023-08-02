import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

import { MekkoChart } from "./visual";
import { BaseColumnChart } from "./columnChart/baseColumnChart";

export class ColumnBorderSettings extends FormattingSettingsCard {
    /*
    const borderShow: boolean = <boolean>(this.borderObjectProperties["show"])
            ?? MekkoChart.DefaultSettings.columnBorder.show;
    const borderFill: string = getFillColorByPropertyName(
        this.borderObjectProperties,
        "color",
        MekkoChart.DefaultSettings.columnBorder.color);
    const borderWidth: number = <number>(this.borderObjectProperties["width"]) ?? 1;
    */

    public show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayNameKey: "Visual_Show",
        value: true,
        topLevelToggle: true
    });

    public color = new formattingSettings.ColorPicker({
        name: "color",
        displayNameKey: "Visual_Color",
        descriptionKey: "Visual_Description_Color",
        value: {value: MekkoChart.DefaultSettings.columnBorder.color},
    });

    public width = new formattingSettings.NumUpDown({
        name: "width",
        displayNameKey: "Visual_Width",
        value: MekkoChart.DefaultSettings.columnBorder.width
    });

    public slices: FormattingSettingsSlice[] = [this.show, this.color, this.width];
}
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    columnBorder: FormattingSettingsCard = new ColumnBorderSettings();

}
