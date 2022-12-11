import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Forms } from 'components/Forms/Forms';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    if (
      this.state.contacts.length &&
      this.state.contacts.find(item => item.name === data.name)
    )
      return alert(
        'Are you sure about that? "' + data.name + '" is already in contacts.'
      );

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  selectedContacts = text => {
    this.setState({
      filter: text.toLowerCase(),
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <Section>
        <Section title="Phonebook">
          <Forms submit={this.addContact} />
        </Section>

        {this.state.contacts.length >= 1 && (
          <Section title="Contacts">
            <Contacts
              contacts={filterContacts}
              onSearch={this.selectedContacts}
              onDelete={this.deleteContact}
            />
          </Section>
        )}
      </Section>
    );
  }
}
