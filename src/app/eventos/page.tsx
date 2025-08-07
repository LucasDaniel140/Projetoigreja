"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, MapPin, ExternalLink } from 'lucide-react';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Event {
  title: string;
  time: string;
  location: string;
  description: string;
  gcalLink: string;
}

const events: Record<string, Event> = {
  [format(addDays(new Date(), 2), 'yyyy-MM-dd')]: {
    title: 'Culto de Celebração',
    time: '19:00 - 21:00',
    location: 'Santuário Principal',
    description: 'Um tempo de louvor, adoração e uma palavra inspiradora. Traga sua família e amigos!',
    gcalLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Culto+de+Celebra%C3%A7%C3%A3o&dates=20240825T220000Z/20240825T230000Z&details=Junte-se+a+n%C3%B3s+para+uma+noite+de+adora%C3%A7%C3%A3o.&location=IgrejaConectada'
  },
  [format(addDays(new Date(), 5), 'yyyy-MM-dd')]: {
    title: 'Estudo Bíblico Semanal',
    time: '20:00 - 21:30',
    location: 'Salão Anexo',
    description: 'Aprofunde seu conhecimento nas Escrituras. Nesta semana, estudaremos o livro de Salmos.',
    gcalLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Estudo+B%C3%ADblico+Semanal&dates=20240825T220000Z/20240825T230000Z&details=Aprofunde+seu+conhecimento+nas+Escrituras.&location=IgrejaConectada'
  },
  [format(addDays(new Date(), 10), 'yyyy-MM-dd')]: {
    title: 'Café com Pastores',
    time: '09:00 - 10:30',
    location: 'Cafeteria da Igreja',
    description: 'Uma oportunidade para conversar com nossa liderança, tirar dúvidas e compartilhar suas ideias.',
    gcalLink: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Caf%C3%A9+com+Pastores&dates=20240825T220000Z/20240825T230000Z&details=Uma+oportunidade+para+conversar+com+nossa+lideran%C3%A7a.&location=IgrejaConectada'
  },
};

export default function EventosPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const selectedEvent = date ? events[format(date, 'yyyy-MM-dd')] : undefined;

  const eventDays = Object.keys(events).map(dateStr => new Date(dateStr + 'T00:00:00'));

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Eventos da Igreja</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Fique por dentro de tudo o que acontece em nossa comunidade. Participe!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardContent className="p-0 md:p-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md w-full"
              locale={ptBR}
              modifiers={{ event: eventDays }}
              modifiersStyles={{
                event: {
                  color: 'hsl(var(--accent-foreground))',
                  backgroundColor: 'hsl(var(--accent))',
                },
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              {date ? format(date, "PPP", { locale: ptBR }) : 'Selecione uma data'}
            </CardTitle>
            <CardDescription>
              {selectedEvent ? "Detalhes do evento para este dia:" : "Nenhum evento agendado para esta data."}
            </CardDescription>
          </CardHeader>
          {selectedEvent && (
            <CardContent className="space-y-4">
              <h3 className="text-xl font-bold">{selectedEvent.title}</h3>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{selectedEvent.location}</span>
              </div>
              <p>{selectedEvent.description}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button>
                  <CalendarIcon className="mr-2 h-4 w-4" /> Inscrever-se no Evento
                </Button>
                <a href={selectedEvent.gcalLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" /> Adicionar ao Google Agenda
                  </Button>
                </a>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
