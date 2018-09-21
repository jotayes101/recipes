# PRINT PRETTY JSON FROM HASH
use JSON;
sub remove_newlines {
    my $str = shift;
    $str =~ s/^\s+//gsm;
    $str =~ s/\n//gsm;
    return $str;
}
%HoA = (
    'foo' => [1,2,3],
    'bar' => ['a','b','c'],
    flintstones => {
        husband   => "fred",
        pal       => "barney",
    },
    jetsons => {
        husband   => "george",
        wife      => "jane",
        "his boy" => "elroy",  # Key quotes needed.
    },
    simpsons => {
        husband   => "homer",
        wife      => "marge",
        kid       => "bart",
    },
);
print "plain:\n".JSON->new->encode(\%HoA)."\n";
my $pretty = JSON->new->pretty->encode(\%HoA);
$pretty =~ s/(\[.*?\])/remove_newlines($1)/egsm;
print "pretty:\n$pretty";

# Otra opcion para imprimir hash como texto
use Data::Dumper;
print "HashFields: " .(Dumper(%HoA));


# Ordenar llaves compuestas por textos y numeros
my @old = ('texto1', 'texto10', 'texto2', 'texto20', 'texto5');
my @new = sort { number_strip($a) <=> number_strip($b) } @old;
foreach (@new) {
    print "str =>$_<=\n";
}
sub number_strip {
    $line = shift;
    my ($num) = $line =~ /(\d+)/;
    return $num;
}


