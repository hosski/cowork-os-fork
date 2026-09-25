# mobile/android/app/src/main/java/com/coworkos/companion/MainActivity.kt

- MainActivity · class · L28-L71 — class MainActivity : ComponentActivity()
- onCreate · method · L36-L65 — override fun onCreate(savedInstanceState: Bundle?)
- onDestroy · method · L67-L70 — override fun onDestroy()
- CompanionApp · function · L73-L96 — @Composable fun CompanionApp(connection: CoWorkConnection)
- MainScreen · function · L98-L251 — @OptIn(ExperimentalMaterial3Api::class) @Composable fun MainScreen( state: ConnectionState, lastCommand: String, commandCount: Int, errorMessage: String?, onConnect: () -> Unit, onDisconnect: () -> Unit, onSettings: () -> Unit, isConfigured: Boolean )
- SettingsScreen · function · L253-L332 — @OptIn(ExperimentalMaterial3Api::class) @Composable fun SettingsScreen(connection: CoWorkConnection, onBack: () -> Unit)
