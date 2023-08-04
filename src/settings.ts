import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

import { MekkoChart } from "./visual";

export class ColumnBorderSettings extends FormattingSettingsCard {

    public name: string = "columnBorder";
    public displayNameKey?: string = "Visual_ColumnBorder";

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

export class LegendSettings extends FormattingSettingsCard {
    public name: string = "legend";
    public displayNameKey: string = "Visual_Legend";

    public show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayNameKey: "Visual_Show",
        value: true,
        topLevelToggle: true
    });

    public showTitle = new formattingSettings.ToggleSwitch({
        name: "showTitle",
        displayNameKey: "Visual_Title",
        value: true
    });

    public titleText = new formattingSettings.TextInput({
        name: "titleText",
        displayNameKey: "Visual_Text",
        value: "Title Text",
        placeholder: "Title Text"
    });
    
    public fontFamily = new formattingSettings.FontPicker({
        name: "fontFamily",
        displayNameKey: "Visual_Font",
        value: "Arial"
    });

    public fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayNameKey: "Visual_Font_Size",
        value: 9
    });

    public slices: FormattingSettingsSlice[] = [this.show, this.showTitle, this.titleText, this.fontFamily, this.fontSize];

}

export class LabelsSettings extends FormattingSettingsCard {
    public name: string = "labels";
    public displayNameKey: string = "Visual_Data_Labels";
    public descriptionKey: string = "Visual_Description_DataLabels";

    public show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayNameKey: "Visual_Show",
        value: false,
        topLevelToggle: true
    });

    public forceDisplay = new formattingSettings.ToggleSwitch({
        name: "forceDisplay",
        displayNameKey: "Visual_Force_Display",
        value: false
    });

    public color = new formattingSettings.ColorPicker({
        name: "color",
        displayNameKey: "Visual_Color",
        descriptionKey: "Visual_Description_Color",
        value: {value: "white"},
    });

    public labelPrecision = new formattingSettings.NumUpDown({
        name: "labelPrecision",
        displayNameKey: "Visual_Decimal_Places",
        descriptionKey: "Visual_Description_DecimalPlaces",
        value: 1
    });

    public fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayNameKey: "Visual_Font_Size",
        value: 9
    });

    public slices: FormattingSettingsSlice[] = [this.show, this.forceDisplay, this.color, this.labelPrecision, this.fontSize];
}

export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    public columnBorder: FormattingSettingsCard = new ColumnBorderSettings();
    public legend: FormattingSettingsCard = new LegendSettings();
    public labels: FormattingSettingsCard = new LabelsSettings();

    public cards: FormattingSettingsCard[] = [this.columnBorder, this.legend, this.labels];

}
