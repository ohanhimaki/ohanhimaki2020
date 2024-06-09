using MudBlazor;

public static class CustomTheme
{
    public static MudTheme MyCustomTheme = new MudTheme()
    {
        Palette = new Palette()
        {
            Primary = "#0c0c0c",
            Background = "#121212",
            Surface = "#121212",
            AppbarBackground = "#1f1f1f",
            DrawerBackground = "#1f1f1f",
            TextPrimary = "#ffffff",
            TextSecondary = "#b0b0b0",
        },
        PaletteDark = new Palette()
        {
            Primary = "#0c0c0c",
            Background = "#121212",
            Surface = "#121212",
            AppbarBackground = "#1f1f1f",
            DrawerBackground = "#1f1f1f",
            TextPrimary = "#ffffff",
            TextSecondary = "#b0b0b0",
        }
    };
}
