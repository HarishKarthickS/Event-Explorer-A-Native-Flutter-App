import 'package:flutter/material.dart';
import 'screens/event_list_screen.dart';
import 'screens/event_detail_screen.dart';
import 'screens/event_create_screen.dart';

void main() {
  runApp(EventExplorerApp());
}

class EventExplorerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Event Explorer',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => EventListScreen(),
        '/eventDetail': (context) => EventDetailScreen(),
        '/createEvent': (context) => EventCreateScreen(),
      },
    );
  }
}
